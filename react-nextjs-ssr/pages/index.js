import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Employee from '../components/Employee';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Next.JS Server Side Rendering Page</h1>
      <h3>List of Employee from REST API</h3>
      <p>Wow!!! This page rendered from server side.</p>
      <Employee employees={props.employees}/>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');  
  const data = await res.json();
  return {
    employees: data
  };
}

export default Index;