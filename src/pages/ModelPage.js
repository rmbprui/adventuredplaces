import Model from "../components/Model";

const ModelPage = () => {
  return (
    <section className="py-3">
      <Model
        camera={{ position: [0, 0, 0] }}
        style={{ height: 600 }}
        model="./models/modelo.glb"
      />
    </section>
  );
};

export default ModelPage;
