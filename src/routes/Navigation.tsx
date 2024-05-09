import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt="React Logo" />

                <ul>
                    {
                        routes.map(route => (
                            <li key={route.to}>
                                <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : ''}>
                                    {route.name}
                                </NavLink>
                            </li>
                        ))
                    }
                    {/* <li>
                        <NavLink to='/lazy1' className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazy2' className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazy3' className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                    </li> */}
                </ul>
            </nav>

            <Routes>
                {
                    routes.map(route => (<Route key={route.to} path={route.path} element={<route.Component />} />))
                }
                <Route path='/*' element={<Navigate to={routes[0].to} replace /> } />
                {/* <Route path='lazy1' element={<LazyPage1></LazyPage1>} />
                <Route path='lazy2' element={<LazyPage2></LazyPage2>} />
                <Route path='lazy3' element={<LazyPage3></LazyPage3>} /> */}
            </Routes>
            
        </div>
    </BrowserRouter>
  )
}
