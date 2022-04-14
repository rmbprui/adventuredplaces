import Model from "../components/Model";

const ModelPage = () => {
  return (
    <section className="py-3">
      <Model
        camera={{ position: [0, 0, 10] }}
        style={{ height: 600 }}
        model="./models/react.glb"
      />
    </section>
  );
};

export default ModelPage;
