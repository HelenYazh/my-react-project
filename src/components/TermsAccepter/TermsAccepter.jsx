import css from "../CoffeeSize/CoffeeSize.module.css";

const TermsAccepter = ({ hasAccepted, onAccept }) => {
  const handleChange = (evt) => {
    onAccept(evt.target.checked);
  };

  return (
    <div className={css.options}>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept all terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default TermsAccepter;
