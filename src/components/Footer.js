function Footer() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex mb-3">
        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
          <img src="/img/twitter-wrap.png" alt="Twitter" className="w-5 mx-2" />
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
          <img src="/img/facebook-wrap.png" alt="Facebook" className="w-5 mx-2" />
        </a>
      </div>
      <span className="font-sans-secondary text-xs text-gray-400">2021 Justin De Leon</span>
    </div>
  );
}

export default Footer;