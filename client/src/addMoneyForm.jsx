import React from "react";


class AddMoneyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: ""
    };
    this.onChangeBound = this.onChange.bind(this);
    this.onSubmitBound = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.updateCategoryHandler(this.props.category, "now", Number(this.state.amount));
    this.setState({
      amount: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitBound}>
        <label>
          Add amount $
          <input type="text" name="amount" value={this.state.amount} onChange={this.onChangeBound} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

}

export default AddMoneyForm;