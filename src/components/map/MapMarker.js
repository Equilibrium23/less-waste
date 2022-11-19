import { Marker, Popup } from "react-leaflet";
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManIcon from '@mui/icons-material/Man';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Box, Stack } from "@mui/material";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { generateGoogleMapUrl } from "../../thirdparty/googleMap/urlGenerator"
import L from 'leaflet';
import categories from '../../sample_data/categories.json'
import { generateJakDojadeUrl } from "../../thirdparty/jakdojade/urlGenerator"
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

function MapMarker(props, distance) {
    var markerIcon = L.icon({
        iconUrl: categories[props.product.category].icon,
        iconSize: L.point(24, 24)
    })

    return (
        <Marker position={props.product.coords} icon={markerIcon}>
            <Popup>
                <Stack spacing={2}>
                    <Box>
                        <CategoryIcon /> {categories[props.product.category].name}
                    </Box>
                    <Box>
                        <TitleIcon /> {props.product.title}
                    </Box>
                    <Box>
                        <DescriptionIcon />  {props.product.description}
                    </Box>
                    <Box>
                        <LocationOnIcon />
                        <a target="_blank" href={generateGoogleMapUrl("", props.product.adress)}>
                            {props.product.adress}
                        </a>
                    </Box>
                    <Box>
                        <ManIcon /> {props.product.owner}
                    </Box>
                    <Box>
                        <ContactPageIcon /> {props.product.contact}
                    </Box>
                    <Box>
                        <DirectionsBusIcon />
                        <a target="_blank" href={generateJakDojadeUrl("Krakow", [50.066632, 19.990106], props.product.coords)}>
                            JakDojade
                        </a>
                    </Box>
                    <Box>
                        <AssistantDirectionIcon />
                        {Math.round(props.distance * 10) / 10000} km
                    </Box>
                </Stack>
            </Popup>
        </Marker>
    );
}

export default MapMarker;