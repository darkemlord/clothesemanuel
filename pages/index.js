import {Page,Layout,Card, Tag,Stack, TextField, Button} from "@shopify/polaris";
import ProductCard from "./components/ProductCard";

const Index = () => {
  return <Page title="Product Tags">
    <Layout>
      <ProductCard />
      <ProductCard />
    </Layout>
  </Page>
};
export default Index;
