import React from 'react';

class Select extends React.Component {
  // Filter out props reserved for the component.
  static domPropsFromProps(props) {
    const {
      ajaxHandler,
      children,
      infiniteLoading,
      initialSelection,
      onChange,
      processAjaxResult,
      searchable,
      staticOptions,
      width,
      ...filteredProps
    } = props;

    if (!ajaxHandler) {
      // Pass the onChange prop because this component won't be in AJAX mode.
      return {
        onChange: () => null,
        ...filteredProps,
      };
    }

    return { ...filteredProps };
  }

  constructor(props) {
    super(props);

    this.state = {
      domProps: Select.domPropsFromProps(props),
      hasInsertedstaticOptions: false,
    };

    this.handleSelectClose = this.handleSelectClose.bind(this);
  }

  componentDidMount() {
    const options = {
      minimumResultsForSearch: this.props.searchable ? 0 : -1,
      width: this.props.width,
    };

    if (this.props.ajaxHandler) {
      options.ajax = {
        processResults: (data) => {
          const results = data.map((result) => {
            return this.props.processAjaxResult(result);
          });

          if (this.props.staticOptions && !this.state.hasInsertedstaticOptions) {
            // Prepend static default option.
            results.unshift(...this.props.staticOptions);
            this.setState({ hasInsertedstaticOptions: true });
          }

          return {
            results,
            pagination: {
              // TODO: Change to length of normal return.
              more: this.props.infiniteLoading ? data.length > 0 : false,
            },
          };
        },
        transport: this.props.ajaxHandler,
      };
    }

    // Init Select2
    $(this.select2).select2(options);

    // Event listeners
    $(this.select2).on('change', this.props.onChange);
    $(this.select2).on('select2:close', this.handleSelectClose);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      domProps: Select.domPropsFromProps(newProps),
    });
  }

  componentWillUnmount() {
    $(this.select2).select2('destroy');
  }

  handleSelectClose() {
    // Reset hasInsertedstaticOptions because current support for AJAX
    // does not cache, so all results are loaded again when the select is
    // closed and opened again.
    this.setState({
      hasInsertedstaticOptions: false,
    });
  }

  render() {
    return (
      <select
        ref={(node) => { this.select2 = node; }}
        {...this.state.domProps}
      >
        { this.props.initialSelection ?
          <option
            value={this.props.initialSelection.id}
            selected
          >
            {this.props.initialSelection.text}
          </option>
          : null
        }
        { this.props.staticOptions &&
          this.props.staticOptions.map((option) => {
            return (
              <option key={option.id} selected={option.selected} value={`${option.id}`}>
                {option.text}
              </option>
            );
          })
        }
        { this.props.children }
      </select>
    );
  }
}

export default Select;
