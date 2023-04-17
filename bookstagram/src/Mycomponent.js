import PropTypes from "prop-types";

const Mycomponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은{name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

Mycomponent.defaultProps = {
  name: "정지은",
};

Mycomponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default Mycomponent;
