import React, { useState, useEffect, useContext } from 'react'

const Context = React.createContext()

function Router({ children }) {
  // get path via which we opened the page
  const [route, setRoute] = useState(window.location.pathname)

  useEffect(() => {
    // update the path in the address bar
    window.history.pushState({}, '', route)
  }, [route])

  // detect when the user clicks the back button
  window.addEventListener('popstate', () => {
    setRoute(window.location.pathname)
  })


  // we need to extract the path from the children of the Router component
  const routes = React.Children.map(children, (child) => {
    return {
      path: child.props.path,
      children: child.props.element,
    }
})
// we need to find the route that matches the current route
const routeMatch = routes.find((r) => route === r.path)

// the element is the children of the Router component, linked to the route.
const element = routeMatch && routeMatch.children


// we pass the route to the context, so all the children can access the current route and mutate it.
return (
  <>
    <Context.Provider value={[route, setRoute]}>
      {element}
    </Context.Provider>
  </>
)
}

function Link({ to, children }) {
// extracting the state holding the current route from the Router component
const [, setRoute] = useContext(Context)

const handleClick = (event) => {
  event.preventDefault()

  setRoute(to)
}

return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

function Route({ children }) {
  return <>{children}</>
}

export { Router, Link, Route }