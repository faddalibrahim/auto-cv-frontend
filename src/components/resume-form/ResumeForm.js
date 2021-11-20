import Icon from "components/icon/Icon";
import Input from "components/input/Input";
import {
  CHECK_CIRCLE_OUTLINE,
  MATERIAL_ICONS,
  MATERIAL_ICONS_OUTLINED,
  KEYBOARD_ARROW_DOWN,
} from "utils/MaterialIconsData";

const ResumeForm = () => {
  return (
    <form
      autoComplete="off"
      style={{
        padding: "1rem",
        boxShadow: "0px 4px 17px rgba(51, 51, 51, 0.1)",
        height: "100%",
        width: "25vw",
        backgroundColor: "white",
      }}
    >
      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>PERSONAL INFORMATION</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Input placeholder="hello" />
        </article>
      </section>
      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>EDUCATION</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Input placeholder="hello" />
        </article>
      </section>
      <section>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            alignItems: "center",
            justifyItems: "flex-start",
          }}
        >
          <Icon type={MATERIAL_ICONS} name={CHECK_CIRCLE_OUTLINE} />
          <span>ACHIEVEMENTS/AWARDS</span>
          <Icon type={MATERIAL_ICONS_OUTLINED} name={KEYBOARD_ARROW_DOWN} />
        </header>
        <article>
          <Input placeholder="hello" />
        </article>
      </section>
    </form>
  );
};

export default ResumeForm;
