// $(function() {
//     $('form').submit(function(e) {
//         e.preventDefault();
//     });
// });

function change(){
    alert("You are viewing the graph from 2015");

}

function change2(){
    d3.select("svg").remove();
    data = [['Business Skills', 'Arts, entertainment and recreation ', 126, 2016],
        ['Business Skills', 'Financial and insurance activities', 142, 2016],
        ['Business Skills', 'Information and communication', 284, 2016],
        ['Business Skills', 'Manufacturing', 318, 2016],
        ['Business Skills', 'Mining and quarrying', 53, 2016],
        ['Business Skills',
            'Professional scientific and technical activities',
            415,
            2016],
        ['Disruptive Tech Skills', 'Arts, entertainment and recreation ', 17, 2016],
        ['Disruptive Tech Skills', 'Financial and insurance activities', 16, 2016],
        ['Disruptive Tech Skills', 'Information and communication', 54, 2016],
        ['Disruptive Tech Skills', 'Manufacturing', 51, 2016],
        ['Disruptive Tech Skills', 'Mining and quarrying', 9, 2016],
        ['Disruptive Tech Skills',
            'Professional scientific and technical activities',
            61,
            2016],
        ['Soft Skills', 'Arts, entertainment and recreation ', 52, 2016],
        ['Soft Skills', 'Financial and insurance activities', 34, 2016],
        ['Soft Skills', 'Information and communication', 88, 2016],
        ['Soft Skills', 'Manufacturing', 71, 2016],
        ['Soft Skills', 'Mining and quarrying', 11, 2016],
        ['Soft Skills',
            'Professional scientific and technical activities',
            131,
            2016],
        ['Specialized Industry Skills',
            'Arts, entertainment and recreation ',
            256,
            2016],
        ['Specialized Industry Skills',
            'Financial and insurance activities',
            70,
            2016],
        ['Specialized Industry Skills', 'Information and communication', 289, 2016],
        ['Specialized Industry Skills', 'Manufacturing', 327, 2016],
        ['Specialized Industry Skills', 'Mining and quarrying', 72, 2016],
        ['Specialized Industry Skills',
            'Professional scientific and technical activities',
            508,
            2016],
        ['Tech Skills', 'Arts, entertainment and recreation ', 76, 2016],
        ['Tech Skills', 'Financial and insurance activities', 58, 2016],
        ['Tech Skills', 'Information and communication', 196, 2016],
        ['Tech Skills', 'Manufacturing', 142, 2016],
        ['Tech Skills', 'Mining and quarrying', 25, 2016],
        ['Tech Skills',
            'Professional scientific and technical activities',
            204,
            2016]];
    console.log(data);
    var svg = d3.select("body").append("svg").attr("width", 960).attr("height", 800);

    svg.append("text").attr("x",250).attr("y",50)
        .attr("class","header").text("Bipartite graph of skills & industry in 2016");

    var g =[svg.append("g").attr("transform","translate(150,100)")
        ,svg.append("g").attr("transform","translate(650,100)")];

    var bp=[ viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(600)
        .width(200)
        .barSize(35)
        .fill(d=>color[d.primary])
        ,viz.bP()
            .data(data)
            .value(d=>d[2])
            .min(12)
            .pad(1)
            .height(600)
            .width(200)
            .barSize(35)
            .fill(d=>color[d.primary])
    ];

    [0].forEach(function(i){
        g[i].call(bp[i])

        g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Skill Group");
        g[i].append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("Industry Group");

        g[i].append("line").attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("x1",200).attr("x2",300);

        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",200).attr("x2",300);

        g[i].selectAll(".mainBars")
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

        g[i].selectAll(".mainBars").append("text").attr("class","label")
            .attr("x",d=>(d.part=="primary"? -30: 30))
            .attr("y",d=>+6)
            .text(d=>d.key)
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

        g[i].selectAll(".mainBars").append("text").attr("class","perc")
            .attr("x",d=>(d.part=="primary"? -40: 40))
            .attr("y",d=>+18)
            .text(function(d){ return d3.format("0.0%")(d.percent)})
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
    });

    d3.select(self.frameElement).style("height", "800px");
}

function change3(){
    d3.select("svg").remove();
    data = [['Business Skills', 'Arts, entertainment and recreation ', 126, 2017],
        ['Business Skills', 'Financial and insurance activities', 142, 2017],
        ['Business Skills', 'Information and communication', 284, 2017],
        ['Business Skills', 'Manufacturing', 318, 2017],
        ['Business Skills', 'Mining and quarrying', 53, 2017],
        ['Business Skills',
            'Professional scientific and technical activities',
            415,
            2017],
        ['Disruptive Tech Skills', 'Arts, entertainment and recreation ', 17, 2017],
        ['Disruptive Tech Skills', 'Financial and insurance activities', 16, 2017],
        ['Disruptive Tech Skills', 'Information and communication', 54, 2017],
        ['Disruptive Tech Skills', 'Manufacturing', 51, 2017],
        ['Disruptive Tech Skills', 'Mining and quarrying', 9, 2017],
        ['Disruptive Tech Skills',
            'Professional scientific and technical activities',
            61,
            2017],
        ['Soft Skills', 'Arts, entertainment and recreation ', 52, 2017],
        ['Soft Skills', 'Financial and insurance activities', 34, 2017],
        ['Soft Skills', 'Information and communication', 88, 2017],
        ['Soft Skills', 'Manufacturing', 71, 2017],
        ['Soft Skills', 'Mining and quarrying', 11, 2017],
        ['Soft Skills',
            'Professional scientific and technical activities',
            131,
            2017],
        ['Specialized Industry Skills',
            'Arts, entertainment and recreation ',
            256,
            2017],
        ['Specialized Industry Skills',
            'Financial and insurance activities',
            70,
            2017],
        ['Specialized Industry Skills', 'Information and communication', 289, 2017],
        ['Specialized Industry Skills', 'Manufacturing', 327, 2017],
        ['Specialized Industry Skills', 'Mining and quarrying', 72, 2017],
        ['Specialized Industry Skills',
            'Professional scientific and technical activities',
            508,
            2017],
        ['Tech Skills', 'Arts, entertainment and recreation ', 76, 2017],
        ['Tech Skills', 'Financial and insurance activities', 58, 2017],
        ['Tech Skills', 'Information and communication', 196, 2017],
        ['Tech Skills', 'Manufacturing', 142, 2017],
        ['Tech Skills', 'Mining and quarrying', 25, 2017],
        ['Tech Skills',
            'Professional scientific and technical activities',
            204,
            2017]];
    var svg = d3.select("body").append("svg").attr("width", 960).attr("height", 800);

    svg.append("text").attr("x",250).attr("y",50)
        .attr("class","header").text("Bipartite graph of skills & industry in 2017");

    var g =[svg.append("g").attr("transform","translate(150,100)")
        ,svg.append("g").attr("transform","translate(650,100)")];

    var bp=[ viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(600)
        .width(200)
        .barSize(35)
        .fill(d=>color[d.primary])
        ,viz.bP()
            .data(data)
            .value(d=>d[2])
            .min(12)
            .pad(1)
            .height(600)
            .width(200)
            .barSize(35)
            .fill(d=>color[d.primary])
    ];

    [0].forEach(function(i){
        g[i].call(bp[i])

        g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Skill Group");
        g[i].append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("Industry Group");

        g[i].append("line").attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("x1",200).attr("x2",300);

        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",200).attr("x2",300);

        g[i].selectAll(".mainBars")
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

        g[i].selectAll(".mainBars").append("text").attr("class","label")
            .attr("x",d=>(d.part=="primary"? -30: 30))
            .attr("y",d=>+6)
            .text(d=>d.key)
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

        g[i].selectAll(".mainBars").append("text").attr("class","perc")
            .attr("x",d=>(d.part=="primary"? -40: 40))
            .attr("y",d=>+18)
            .text(function(d){ return d3.format("0.0%")(d.percent)})
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
    });

    d3.select(self.frameElement).style("height", "800px");

}

function change4(){
    d3.select("svg").remove();
    data = [['Business Skills', 'Arts, entertainment and recreation ', 126, 2018],
        ['Business Skills', 'Financial and insurance activities', 142, 2018],
        ['Business Skills', 'Information and communication', 284, 2018],
        ['Business Skills', 'Manufacturing', 318, 2018],
        ['Business Skills', 'Mining and quarrying', 53, 2018],
        ['Business Skills',
            'Professional scientific and technical activities',
            415,
            2018],
        ['Disruptive Tech Skills', 'Arts, entertainment and recreation ', 17, 2018],
        ['Disruptive Tech Skills', 'Financial and insurance activities', 16, 2018],
        ['Disruptive Tech Skills', 'Information and communication', 54, 2018],
        ['Disruptive Tech Skills', 'Manufacturing', 51, 2018],
        ['Disruptive Tech Skills', 'Mining and quarrying', 9, 2018],
        ['Disruptive Tech Skills',
            'Professional scientific and technical activities',
            61,
            2018],
        ['Soft Skills', 'Arts, entertainment and recreation ', 52, 2018],
        ['Soft Skills', 'Financial and insurance activities', 34, 2018],
        ['Soft Skills', 'Information and communication', 88, 2018],
        ['Soft Skills', 'Manufacturing', 71, 2018],
        ['Soft Skills', 'Mining and quarrying', 11, 2018],
        ['Soft Skills',
            'Professional scientific and technical activities',
            131,
            2018],
        ['Specialized Industry Skills',
            'Arts, entertainment and recreation ',
            256,
            2018],
        ['Specialized Industry Skills',
            'Financial and insurance activities',
            70,
            2018],
        ['Specialized Industry Skills', 'Information and communication', 289, 2018],
        ['Specialized Industry Skills', 'Manufacturing', 327, 2018],
        ['Specialized Industry Skills', 'Mining and quarrying', 72, 2018],
        ['Specialized Industry Skills',
            'Professional scientific and technical activities',
            508,
            2018],
        ['Tech Skills', 'Arts, entertainment and recreation ', 76, 2018],
        ['Tech Skills', 'Financial and insurance activities', 58, 2018],
        ['Tech Skills', 'Information and communication', 196, 2018],
        ['Tech Skills', 'Manufacturing', 142, 2018],
        ['Tech Skills', 'Mining and quarrying', 25, 2018],
        ['Tech Skills',
            'Professional scientific and technical activities',
            204,
            2018]];
    var svg = d3.select("body").append("svg").attr("width", 960).attr("height", 800);

    svg.append("text").attr("x",250).attr("y",50)
        .attr("class","header").text("Bipartite graph of skills & industry in 2018");

    var g =[svg.append("g").attr("transform","translate(150,100)")
        ,svg.append("g").attr("transform","translate(650,100)")];

    var bp=[ viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(600)
        .width(200)
        .barSize(35)
        .fill(d=>color[d.primary])
        ,viz.bP()
            .data(data)
            .value(d=>d[2])
            .min(12)
            .pad(1)
            .height(600)
            .width(200)
            .barSize(35)
            .fill(d=>color[d.primary])
    ];

    [0].forEach(function(i){
        g[i].call(bp[i])

        g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Skill Group");
        g[i].append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("Industry Group");

        g[i].append("line").attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("x1",200).attr("x2",300);

        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",200).attr("x2",300);

        g[i].selectAll(".mainBars")
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

        g[i].selectAll(".mainBars").append("text").attr("class","label")
            .attr("x",d=>(d.part=="primary"? -30: 30))
            .attr("y",d=>+6)
            .text(d=>d.key)
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

        g[i].selectAll(".mainBars").append("text").attr("class","perc")
            .attr("x",d=>(d.part=="primary"? -40: 40))
            .attr("y",d=>+18)
            .text(function(d){ return d3.format("0.0%")(d.percent)})
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
    });

    d3.select(self.frameElement).style("height", "800px");

}

function change5(){
    d3.select("svg").remove();
    data = [['Business Skills', 'Arts, entertainment and recreation ', 126, 2019],
        ['Business Skills', 'Financial and insurance activities', 142, 2019],
        ['Business Skills', 'Information and communication', 284, 2019],
        ['Business Skills', 'Manufacturing', 318, 2019],
        ['Business Skills', 'Mining and quarrying', 53, 2019],
        ['Business Skills',
            'Professional scientific and technical activities',
            415,
            2019],
        ['Disruptive Tech Skills', 'Arts, entertainment and recreation ', 17, 2019],
        ['Disruptive Tech Skills', 'Financial and insurance activities', 16, 2019],
        ['Disruptive Tech Skills', 'Information and communication', 54, 2019],
        ['Disruptive Tech Skills', 'Manufacturing', 51, 2019],
        ['Disruptive Tech Skills', 'Mining and quarrying', 9, 2019],
        ['Disruptive Tech Skills',
            'Professional scientific and technical activities',
            61,
            2019],
        ['Soft Skills', 'Arts, entertainment and recreation ', 52, 2019],
        ['Soft Skills', 'Financial and insurance activities', 34, 2019],
        ['Soft Skills', 'Information and communication', 88, 2019],
        ['Soft Skills', 'Manufacturing', 71, 2019],
        ['Soft Skills', 'Mining and quarrying', 11, 2019],
        ['Soft Skills',
            'Professional scientific and technical activities',
            131,
            2019],
        ['Specialized Industry Skills',
            'Arts, entertainment and recreation ',
            256,
            2019],
        ['Specialized Industry Skills',
            'Financial and insurance activities',
            70,
            2019],
        ['Specialized Industry Skills', 'Information and communication', 289, 2019],
        ['Specialized Industry Skills', 'Manufacturing', 327, 2019],
        ['Specialized Industry Skills', 'Mining and quarrying', 72, 2019],
        ['Specialized Industry Skills',
            'Professional scientific and technical activities',
            508,
            2019],
        ['Tech Skills', 'Arts, entertainment and recreation ', 76, 2019],
        ['Tech Skills', 'Financial and insurance activities', 58, 2019],
        ['Tech Skills', 'Information and communication', 196, 2019],
        ['Tech Skills', 'Manufacturing', 142, 2019],
        ['Tech Skills', 'Mining and quarrying', 25, 2019],
        ['Tech Skills',
            'Professional scientific and technical activities',
            204,
            2019]];
    var svg = d3.select("body").append("svg").attr("width", 960).attr("height", 800);

    svg.append("text").attr("x",250).attr("y",50)
        .attr("class","header").text("Bipartite graph of skills & industry in 2019");

    var g =[svg.append("g").attr("transform","translate(150,100)")
        ,svg.append("g").attr("transform","translate(650,100)")];

    var bp=[ viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(600)
        .width(200)
        .barSize(35)
        .fill(d=>color[d.primary])
        ,viz.bP()
            .data(data)
            .value(d=>d[2])
            .min(12)
            .pad(1)
            .height(600)
            .width(200)
            .barSize(35)
            .fill(d=>color[d.primary])
    ];

    [0].forEach(function(i){
        g[i].call(bp[i])

        g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Skill Group");
        g[i].append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("Industry Group");

        g[i].append("line").attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("x1",200).attr("x2",300);

        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",200).attr("x2",300);

        g[i].selectAll(".mainBars")
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

        g[i].selectAll(".mainBars").append("text").attr("class","label")
            .attr("x",d=>(d.part=="primary"? -30: 30))
            .attr("y",d=>+6)
            .text(d=>d.key)
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

        g[i].selectAll(".mainBars").append("text").attr("class","perc")
            .attr("x",d=>(d.part=="primary"? -40: 40))
            .attr("y",d=>+18)
            .text(function(d){ return d3.format("0.0%")(d.percent)})
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
    });

    d3.select(self.frameElement).style("height", "800px");

}

function mouseclick(d){

    //d3.select("svg").remove();
    data = [['Business Skills', 'Arts, entertainment and recreation ', 630],
        ['Business Skills', 'Financial and insurance activities', 710],
        ['Business Skills', 'Information and communication', 1420]];

    var svg = d3.select("body").append("svg").attr("width", 960).attr("height", 800);

    svg.append("text").attr("x",250).attr("y",50)
        .attr("class","header").text("Biparion of skills & industry");

    var g =[svg.append("g").attr("transform","translate(150,100)")
        ,svg.append("g").attr("transform","translate(650,100)")];

    var bp=[ viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(600)
        .width(200)
        .barSize(35)
        .fill(d=>color[d.primary])
        ,viz.bP()
            .data(data)
            .value(d=>d[2])
            .min(12)
            .pad(1)
            .height(600)
            .width(200)
            .barSize(35)
            .fill(d=>color[d.primary])
    ];

    [0].forEach(function(i){
        g[i].call(bp[i])

        g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Skill Group");
        g[i].append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("Industry Group");

        g[i].append("line").attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("x1",200).attr("x2",300);

        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",-100).attr("x2",0);
        g[i].append("line").attr("y1",600).attr("y2",600).attr("x1",200).attr("x2",300);

        g[i].selectAll(".mainBars")
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

        g[i].selectAll(".mainBars").append("text").attr("class","label")
            .attr("x",d=>(d.part=="primary"? -30: 30))
            .attr("y",d=>+6)
            .text(d=>d.key)
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

        g[i].selectAll(".mainBars").append("text").attr("class","perc")
            .attr("x",d=>(d.part=="primary"? -40: 40))
            .attr("y",d=>+18)
            .text(function(d){ return d3.format("0.0%")(d.percent)})
            .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
    });
    d3.select(self.frameElement).style("height", "800px");
}

