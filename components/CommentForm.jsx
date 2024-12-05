export default function CommentForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data.comment);
    event.target.reset();
    console.log("Das ist unsere Data: ", data.comment);
  }
  return (
    <form className="comment-entry-form" onSubmit={handleSubmit}>
      <h2 className="comment-entry-form__title">New Comment</h2>
      <div className="comment-entry-form__fields">
        <div className="comment-entry-form__field">
          <label htmlFor="comment">Comment:</label>
          <textarea name="comment" id="comment" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Create Comment</button>
        </div>
      </div>
    </form>
  );
}
