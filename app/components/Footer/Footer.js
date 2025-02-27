import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footerInner}`}>
		<p>Created by Denys Harkusha</p>
	  </div>
    </footer>
  );
};

export default Footer;
