//import classes from '/[pid].module.css';

const pid = (props) => {
    return(
        <h1>teste</h1>
    )
};

export default pid;

export async function getStaticPaths() {
    const paths = [{params: {pid: "teste"}}] //DUMMY_PLACES.map(places => ({params: {id: places.creator}}))
    return {
      paths,
      fallback: true
    }
  }

export async function getStaticProps({ params }) {
    const userPlaces = DUMMY_PLACES.filter(place => place.creator === params.id)
    return {
      props: {
        userPlaces
      }
    }
}