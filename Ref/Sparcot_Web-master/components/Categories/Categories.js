import React from "react";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    const { width } = this.props;
    let classOne;
    let classTwo;
    if (width < 800) {
      classOne = "d-flex";
      classTwo = "mx-auto my-3 d-none";
    } else {
      classOne = "d-none";
      classTwo = "mx-auto my-3 d-flex";
    }

    this.state = {
      classOne,
      classTwo
    };
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { width } = this.props;
    if (width !== prevProps.width) {
      if (width < 800) {
        this.setState({
          classOne: "d-flex",
          classTwo: "mx-auto my-3 d-none"
        });
      } else {
        this.setState({
          classOne: "d-none",
          classTwo: "mx-auto my-3 d-flex"
        });
      }
    }
  }

  toggleCategory() {
    this.setState({
      classOne: "d-none",
      classTwo: "mx-auto d-flex flex-column"
    });
  }

  render() {
    const { classOne, classTwo } = this.state;
    return (
      <section className="categories d-flex flex-column text-center">
        <a
          className={classOne}
          onClick={this.toggleCategory}
          role="button"
          tabIndex={0}
        >
          Categories
        </a>
        <div className={classTwo}>
          <a>All categories</a>
          <a>Kitchen collection</a>
          <a>Home appliances</a>
          <a>Electronics</a>
          <a>Toys and cycles</a>
          <a>Foot care</a>
          <a>Food stuff</a>
          <a>Cleaning solutions</a>
        </div>
      </section>
    );
  }
}

export default Categories;
