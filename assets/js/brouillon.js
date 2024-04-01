var attribClickedLink = navigationLink[index].getAttribute("href");
    switch (attribClickedLink) {
      case "#index":
        document.querySelector("#index").classList.remove("hidden");
        document.querySelector("#index").classList.add("home");

        document.querySelector("#resume").classList.add("hidden");
        document.querySelector("#project").classList.add("hidden");
        document.querySelector("#about").classList.add("hidden");
        document.querySelector("#contact").classList.add("hidden");

        console.log(document.querySelector("#index"), attribClickedLink);
        break;
      case "#resume":
        document.querySelector("#index").classList.remove("home");
        document.querySelector("#index").classList.add("hidden");

        
        document.querySelector("#project").classList.add("hidden");
        document.querySelector("#about").classList.add("hidden");
        document.querySelector("#contact").classList.add("hidden");


        document.querySelector("#resume").classList.remove("hidden");
        console.log(document.querySelector("#resume"), attribClickedLink);
        break;
      case "#project":
        document.querySelector("#index").classList.remove("home");
        document.querySelector("#index").classList.add("hidden");

        document.querySelector("#resume").classList.add("hidden");
        document.querySelector("#about").classList.add("hidden");
        document.querySelector("#contact").classList.add("hidden");

        document.querySelector("#project").classList.remove("hidden");
        console.log(document.querySelector("#project"), attribClickedLink);
        break;
      case "#about":
        document.querySelector("#index").classList.remove("home");
        document.querySelector("#index").classList.add("hidden");

        document.querySelector("#resume").classList.add("hidden");
        document.querySelector("#project").classList.add("hidden");
        document.querySelector("#contact").classList.add("hidden");

        document.querySelector("#about").classList.remove("hidden");
        console.log(document.querySelector("#about"), attribClickedLink);
        break;
      case "#contact":
        document.querySelector("#index").classList.remove("home");
        document.querySelector("#index").classList.add("hidden");

        document.querySelector("#resume").classList.add("hidden");
        document.querySelector("#project").classList.add("hidden");
        document.querySelector("#about").classList.add("hidden");

        document.querySelector("#contact").classList.remove("hidden");
        console.log(document.querySelector("#contact"), attribClickedLink);
        break;
      default:
        alert("hô,this page doesn't exist!");
        break;
    }