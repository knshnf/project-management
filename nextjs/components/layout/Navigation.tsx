import { useState } from 'react';

import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type NavItems = {
    label: string
    value: string
    disabled: boolean
}

const Navigation = ( () => {

    const router = useRouter()

    const urlPath = router.asPath

    const navItems: NavItems[] = [
        {
            label: 'Dashboard',
            value: '/dashboard',
            disabled: false
        },
        {
            label: 'Task Board',
            value: '/task',
            disabled: false
        },
        {
            label: 'RTS Tracker',
            value: '/rts',
            disabled: true
        },
        {
            label: 'Configuration',
            value: '/configuration',
            disabled: false
        },
    ];

    const [value, setValue] = useState(urlPath);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.push(newValue)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                textColor= 'primary'
             >
                {
                    navItems.map( (navItem, i) => {
                        return (
                            <Tab key={i} value={navItem.value} label={navItem.label} disabled={navItem.disabled} wrapped/>
                        )
                    })
                }
            </Tabs>
        </Box>
    )
})

export default Navigation