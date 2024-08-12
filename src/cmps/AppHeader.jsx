import { Box,Button,Divider,Drawer,List,ListItem,ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useNavigate } from 'react-router-dom'
export function AppHeader() {
    const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <>
    {/* <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}> */}
      <List>
       
          <ListItem key={'home'} disablePadding>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'toys'} disablePadding>
            <ListItemButton onClick={() => navigate('/toys')}>
              <ListItemText primary={'Toys'} />
            </ListItemButton>
          </ListItem>
          {/* <ListItem key={'login'} disablePadding>
            <ListItemButton onClick={() => navigate('/auth/login')}>
              <ListItemText primary={'Login'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'signup'} disablePadding>
            <ListItemButton onClick={() => navigate('/auth/signup')}>
              <ListItemText primary={'Signup'} />
            </ListItemButton>
          </ListItem> */}
       
      </List>
      <Divider />
     {/* </Box> */}
    </>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='left' transitionDuration={400}>
        {DrawerList}
      </Drawer>
    </div>
  )
  // </header>
}
