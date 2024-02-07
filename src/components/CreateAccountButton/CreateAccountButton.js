const CreateAccountButton = ({onClick}) => {
  return(
    <>
      <button onClick={onClick} className="w-full px-16 py-2 border flex items-center justify-center gap-2  rounded-full text-md font-bold bg-blue-500 border-none">
        Create account
      </button>
    </>
  );
};

export default CreateAccountButton;
