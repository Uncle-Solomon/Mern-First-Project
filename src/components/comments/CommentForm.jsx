import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-cols border items-end border-primary rounded-lg p-4">
        <textarea
          rows="5"
          className="w-full focus:outline-none bg-transparent"
          placeholder="Leave your comment here..."
          onChange={(e) => setValue(e.target.value)}
          defaultValue={initialText}
        />
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500 mt-2 max-[420px]:my-1 max-[420px]:px-4 max-[420px]:py-1.5 "
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary font-semibold text-white mt-2 max-[420px]:my-1 max-[420px]:px-4 max-[420px]:py-1.5"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
