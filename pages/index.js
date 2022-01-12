import {Page,Layout,Card, Tag,Stack, TextField, Button} from "@shopify/polaris";
import { ST } from "next/dist/next-server/lib/utils";
const Index = () => {
  return <Page title="Product Tags">
    <Layout>
      <Layout.Section oneHalf>
        <Card title="Product Name">
          <Card.Section>
            <Stack>
              <Tag  onRemove={()=>console.log("Heloo")}>Test</Tag>
              <Tag  onRemove={()=>console.log("Good")}>Good</Tag>
            </Stack>
          </Card.Section>

          <Card.Section>
            <Stack distribution="equalSpacing">
              <TextField/>
              <Button primary>Add Tag</Button>
            </Stack>
          </Card.Section>
        </Card>
      </Layout.Section>
      <Layout.Section oneHalf>
       <Card title="Product Name" >
          <Card.Section>
            <Stack>
              <Tag  onRemove={()=>console.log("Heloo")}>Test</Tag>
              <Tag  onRemove={()=>console.log("Good")}>Good</Tag>
            </Stack>
          </Card.Section>

          <Card.Section>
            <Stack distribution="equalSpacing">
              <TextField/>
              <Button primary>Add Tag</Button>
            </Stack>
          </Card.Section>
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
};
export default Index;
