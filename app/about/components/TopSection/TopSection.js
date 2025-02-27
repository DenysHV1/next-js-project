import s from './TopSection.module.css'

const TopSection = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <h1>About us page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          metus at odio ullamcorper volutpat. Integer luctus, eros et luctus
          malesuada, velit libero tincidunt nunc, non fringilla sapien justo id
          lectus. Nulla facilisi. Suspendisse potenti. Sed vel urna nec nisi
          varius.
        </p>
      </div>
    </section>
  );
};

export default TopSection;
