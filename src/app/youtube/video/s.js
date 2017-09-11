/* jshint esnext: true */

var color = d3.scaleOrdinal(d3.schemeCategory20c);

d3Bubble = class d3Bubble {

  constructor(widget) {
    this.widget = widget;
    this.element = widget.getElement();
    this.config = {
      width: this.element.clientWidth,
      height: this.element.clientHeight,
      circle: {
        minRadius: 20,
        maxRadius: 100,
        strength: 5,
        forceCenter: false,
        forceX: false
      },
      fields: item => Object.keys(item).reduce((res, key) => {
        if (typeof (item[key]) != 'function') {
          res[key] = item[key];
          return res;
        }
      }, {}),
      value: d => d,
      name: d => d,
      tooltip: d => Object.keys(this.config.fields(d)).reduce((arr, key) => {
        arr.push(key + ': ' + d[key]);
        return arr;
      }, [])
        .join('<br>')
    };
  }

  _getSVG() {
    this.svg = d3.select(this.element)
      .append("svg")
      .attr("width", this.config.width)
      .attr("height", this.config.height);

  }

  _getCircles() {
    var x0 = this.config.width / 2;
    var y0 = this.config.height / 2;

    var domain = [d3.min(this.data, d => this.config.value(d)), d3.max(this.data, d => this.config.value(d))];
    this.scaleRadius = d3.scaleLinear().domain(domain).range([this.config.circle.minRadius, this.config.circle.maxRadius]);
    var xScale = d3.scaleLinear().domain([0, this.data.length]).range([this.config.width * 0.2, this.config.width * 0.8]);

    var ticked = () => {
      this.node
        .attr('transform', d => 'translate(' + [d.x, d.y] + ')');
      //.attr("x", d => d.x)
      //.attr("y", d => d.y);
      //       this.node
      //       .selectAll('text')
      //       .attr("x", d => d.x) //  this.scaleRadius(this.config.value(d))/2)
      //       .attr("y", d => d.y); // + this.scaleRadius(this.config.value(d))/2)
    };

    var simulation = d3.forceSimulation(this.data)
      .force('charge', d3.forceManyBody().strength([this.config.circle.strength]))
      .force('collision', d3.forceCollide().radius(d => this.scaleRadius(this.config.value(d))));

    if (this.config.circle.forceX) {
      simulation
        .force("x", d3.forceX(d => xScale(d.index)))
        .force("y", d3.forceY(y0));
    } else {
      simulation
        .force('center', d3.forceCenter(x0, y0));
    }
    simulation
      .on("tick", ticked);

    this.node = this.svg
      .selectAll(".node")
      .data(this.data)
      .enter()
      .append("g")
      .attr("class", "node");


    //     this.clips = this.node
    //       .selectAll('clipPath')
    //       .append("clipPath")
    //       .attr("id", d => "clip-" + d.index);

    //     this.circles =  
    this.node
      .append("circle")
      .attr('id', d => d.index)
      .attr('r', d => this.scaleRadius(this.config.value(d)))
      .style('fill', d => color(this.scaleRadius(this.config.value(d))))
      .on("mouseover", d => this.tooltip.html(this.config.tooltip(d)).style("display", "block"))
      .on("mousemove", () => this.tooltip.style("top", (d3.event.pageY + 15) + "px")
        .style("left", (d3.event.pageX + 15) + "px"))
      .on("mouseout", d => this.tooltip.style("display", "none"));

    this.node
      .append("clipPath")
      .attr("id", d => "clip-" + d.index)
      .append("use")
      .attr("xlink:href", d => "#" + d.index);
  }

  _getCircleTexts() {

    this.node.append("text")
      //       .attr("x", d => d.x) //  this.scaleRadius(this.config.value(d))/2)
      //       .attr("y", d => d.y) // + this.scaleRadius(this.config.value(d))/2)
      .attr("clip-path", d => "url(#clip-" + d.index + ")")
      .text(d => this.config.name(d));
  }

  _getTooltip() {
    this.tooltip = d3.select('body')
      .append("div")
      .style("position", "absolute")
      .style("display", "none")
      .style("color", "white")
      .style("padding", "8px")
      .style("background-color", "gray")
      .style("border-radius", "6px");
    //.style("font-family", "monospace");
  }

  set() {
    this.widget.datasource.load(() => {
      this.data = this.widget.datasource.items.map(item => this.config.fields(item));
      this._getSVG();
      this._getCircles();
      this._getCircleTexts();
      this._getTooltip();
    });
  }

};