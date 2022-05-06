import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardPatientsProps = {
    imgSrc: string
    name: string
    labelTestPerformed: string
    testPerformed: string
    labelDate: String
    date: string
}


export function CardPatients(props: CardPatientsProps){
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.labelTestPerformed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.testPerformed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.labelDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.date}
                </Typography>
            </CardContent>
        </Card>
    );
}