import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect } from "react";
import { removeItemFromFavList } from "../actions";
import { FaTrash} from "react-icons/fa"


const mapStateToProps = (state) => ({
  list: state.list.fav,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => {
    dispatch(removeItemFromFavList(index));
  },
});

const Favorites = ({ list, removeFromList, history }) => {
  // useEffect(() => {
  //   // let's check if the user is logged in!
  //   if (!userName) {
      
  //     history.replace("/");
  //   }
  // }, []);

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {list.map((company, i) => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => removeFromList(i)}>
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={company.imageUrl}
                alt="book selected"
              />
              {company.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          {/* TOTAL:{" "}
          {list.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )} */}
        </Col>
      </Row>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
