const MyReactApp = (function() {
  let state // hold our state in module scope
  return {
    render(Component) {
      const Comp = Component()
      Comp.render()
      return Comp
    },
    useState(initialValue) {
      state = state || initialValue // assign a new every run
      function setState(newState) {
        state = newState
      }
      return [state, setState]
    }
  }
})()

const { useState, render } = MyReactApp

function Counter() {
  const [count, setCount] = useState(0)
  return {
    render() {
      console.log('render counter', count)
    },
    increment() {
      setCount(count + 1)
    }
  }
}

const counter1 = render(Counter)
counter1.increment()
const counter2 = render(Counter)
counter2.increment()
render(Counter)
