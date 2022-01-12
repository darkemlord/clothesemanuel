import {Page,Layout,Card, Tag} from "@shopify/polaris";
const Index = () => {
  return <Page title="Product Tags">
    <Layout>
      <Layout.Section oneHalf>
        <Card title="Product Name">
          <Card.Section>
            <Tag  onRemove={()=>console.log("Heloo")}>Test</Tag>
            <Tag  onRemove={()=>console.log("Good")}>Good</Tag>
          </Card.Section>

          <Card.Section>
            <p>
              View a summary of your online store’s performance, including sales,
              visitors, top products, and referrals.
            </p>
          </Card.Section>
        </Card>
      </Layout.Section>
      <Layout.Section oneHalf>
       <Card title="Product Name" sectioned>
         <p>Simple Texts</p>

       </Card>
      </Layout.Section>
    </Layout>
  </Page>
};
export default Index;
