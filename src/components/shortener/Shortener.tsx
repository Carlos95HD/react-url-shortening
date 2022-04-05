export const Shortener = () => {
  return (
    <div className="container mx-auto shorten-bg rounded-md p-14 relative top-24">
      <div className="flex flex-grow">
        <input
          className="p-4 rounded-md w-full mr-6"
          type="text"
          placeholder="Shorten a link here..."
          />
        <button className="btn btn-primary py-2 px-6 rounded-md">
          Shorten It!
        </button>
      </div>
    </div>
  )
}