function Contact() {
  return (
    <div className="px-5 font-sans-secondary text-gray-500 mb-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mx-3">
          <div className="px-3">
            <h2 className="text-xl font-bold mb-4">General Information</h2>
            <p className="mb-2">
              Aliquam erat volutpat. Nulla facilisi. Vivamus vehicula tincidunt lorem, ut pellentesque arcu
              luctus
              vitae. Fusce eget nisl interdum, luctus nunc a, accumsan mi. Donec feugiat tincidunt mi, sed
              ullamcorper arcu auctor a. Nam et orci fringilla, ultrices sapien quis, facilisis sapien. Donec
              efficitur tortor euismod, finibus mauris in, iaculis dui. In sagittis nisl tellus, ut fermentum
              nunc
              mollis sed.
          </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar sollicitudin ligula,
              vitae
              sollicitudin nisl commodo in. Fusce facilisis, metus eget porta pulvinar, enim risus tempor
              quam,
              viverra hendrerit tellus quam vitae tortor. Duis ac arcu iaculis nunc faucibus congue. Sed
              ornare
              vehicula pretium. Vivamus non ullamcorper est, id ornare purus. Sed in dolor enim. Ut vel
              posuere
              lectus.
          </p>
          </div>
          <div className="px-3">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <div className="flex flex-col">
              <div className="flex items-center py-1">
                <img src="/img/phone.png" alt="Phone" className="w-5 h-5 mr-3" />
                <a href="https://youtu.be/dQw4w9WgXcQ" className="text-green-500" target="_blank" rel="noreferrer">+639171234567</a>
              </div>
              <div className="flex items-center py-1">
                <img src="/img/mail.png" alt="E-mail" className="w-5 h-5 mr-3" />
                <a href="mailto:jusmdeleon@gmail.com" className="text-green-500" target="_blank" rel="noreferrer">jusmdeleon@gmail.com</a>
              </div>
              <div className="flex items-center py-1">
                <img src="/img/twitter.png" alt="Twitter" className="w-5 h-5 mr-3" />
                <a href="https://youtu.be/dQw4w9WgXcQ" className="text-green-500" target="_blank" rel="noreferrer">@jusdeleon_dev</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;