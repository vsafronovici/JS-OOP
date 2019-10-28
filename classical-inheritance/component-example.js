class Component {
  constructor(props) {
    this.props = props
  }

  onMount() {
    console.log('onMount doing nothing for ' + this.constructor.name)
  }

  render() {}

  onUnmount() {
    console.log('onUnmount doing nothing for ' + this.constructor.name)
  }

  timeToShow() {
    return 3 * 1000; // 3 seconds
  }
}


class C1 extends Component {
  render() {
    return 'Render C1 with props:' + JSON.stringify(this.props)
  }
}

class C2 extends Component {
  onMount() {
    console.log('C2 is mounting')
  }

  render() {
    return 'Render C2 with props:' + JSON.stringify(this.props)
  }

  onUnmount() {
    console.log('C2 is unmounting')
  }
}

class C3 extends Component {
  render() {
    return 'Render C3 with props:' + JSON.stringify(this.props)
  }

  onUnmount() {
    console.log('C3 is unmounting')
  }

  timeToShow() {
    return 10 * 1000; // 10 seconds
  }

}


function mountComponent(Comp, props) {
  const comp = new Comp(props)
  comp.onMount()
  console.log(`************ ${comp.render()} ***********`)
  setTimeout(() => {
    comp.onUnmount()
  }, comp.timeToShow())
}

mountComponent(C1, { a: 1, b: 11 })
mountComponent(C2, { a: 2, b: 22 })
mountComponent(C3, { a: 3, b: 33 })



