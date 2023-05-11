"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/Tabs";
import Code from "./Code";
import SimpleBar from "simplebar-react";
import { nodejs, python } from "@/helpers/documentation-code";
import "simplebar-react/dist/simplebar.min.css";

interface DocumentationTabsProps {}

const DocumentataionTabs = (): JSX.Element => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <SimpleBar>
        <TabsContent value="nodejs">
          <Code language={"javascript"} code={nodejs} show />
        </TabsContent>
      </SimpleBar>
      <SimpleBar>
        <TabsContent value="python">
          <Code language={"python"} code={python} show />
        </TabsContent>
      </SimpleBar>
    </Tabs>
  );
};

export default DocumentataionTabs;
