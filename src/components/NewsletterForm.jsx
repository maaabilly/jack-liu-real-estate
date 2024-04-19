import Button from './Button';
const NewsletterForm = () => {
  return (
    <div className="flex gap-5">
      <form className="max-w-sm mx-auto">
        <input
          type="email"
          id="email"
          className="bg-white rounded-xl px-4 py-3"
          placeholder="Newsletter"
          required
        />
      </form>
      <Button className={`rounded-xl`}>Sign Up</Button>
    </div>
  );
};

export default NewsletterForm;
