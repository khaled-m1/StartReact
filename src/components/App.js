import "../App.css";
import Images from "./images";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sectionOne">
        {/* images  1*/}
        <Images
          images={
            "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
          name={"بيلا"}
          age={"9 month"}
        />
        {/* images  2*/}
        <Images
          images={
            "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          }
          name={"كاتي"}
          age={"10 month"}
        />
      </div>
      <div className="sectionOne">
        {/* images  3*/}
        <Images
          images={"https://c.tenor.com/-86-Ozt9ZR0AAAAC/wow.gif"}
          name={"سكرة"}
          age={"3 month"}
        />
        {/* images  4*/}
        <Images
          images={
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
          name={"سنبوسة"}
          age={"1 year"}
        />
      </div>
    </div>
  );
}
export default App;
