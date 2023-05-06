import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

const styles = {
  header: {
    fontSize: "24px",
    marginTop: "10px",
    width: "150px",
    height: "150px",
    backgroundColor: "#E6E6FA",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    marginLeft: "10px",
    cursor: "pointer",
  },
};

function Search(props) {
  const { value, onChange, onSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSelect = (selectedValue) => {
    setInputValue(selectedValue);
    onSubmit();
  };

  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <div style={styles.header}>
        {/* <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8jHyBMSUodGBr8/PwAAAAfGxwZFBXz8/MOBQjW1tZQTU4JAAAsKCm8u7sQCQvIx8erqqpmZGSJiIgnIyTh4eFdW1uPjY6gnp8tKSrX19d8iMSxAAACEUlEQVR4nO3d626CQBRFYVCHOyiCt77/g5bqj1Y0aUIPHfawvgfQWZkgYHIyUQQAAAAAAAAAAAAAABCmrGivbZH5XsZssq52VV65ugu08dDnSfwlyeOD78XMoXGPvnuja3wvx97JxT+5k+8FmTunT4Xp2feCrBXPWzhsYuF7ScYu+1Hh/uJ7ScaO6agwPfpekq1duR0Vbsud70WZ2m1eCjcUaqFQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6dAp3U70rnGq+vOJyLDcT9fFYP/WjyuNlnpmp09nt0+1UL4HDLk6V7t15huG+xo0nl3xK7Uc0D+PpOt+c8aBtFie/f+m/Snrbceku9130Iu8sA7N6aVs4bGJtuYkvM65LYDpn21a+c96oWsPC6/Iuw+FCvBoWhr+H4V+Hi/wtvZneEIO/H67gmSb859IVvFus4P0wWtI7/scsfXeB/0/zBzr/tU1FoT4K9VGoj0J9FOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoL/xzSMM/S3YF5wGHf6Zz+Odyr+Bs9ahx34O2yRwDkv4d+vzRmOSx+YjrMmRd7aq8crfOeEh5QbKivbZFuH0AAAAAAAAAAAAAAGDtPgGQACpuBeEidwAAAABJRU5ErkJggg=="
          alt="add"
        /> */}
      </div>
      <div style={styles.wrapper}>
        <div className="autocomplete-wrapper">
          <AutoComplete
            suggestions={[]}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSelect={handleSelect}
          />
        </div>
        <button type="submit" style={styles.button}>
          검색
        </button>
      </div>
    </form>
  );
}

export default Search;
