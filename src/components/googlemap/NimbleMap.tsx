import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import "./googlemap.scss";
import { GeolocatedProps, geolocated } from "react-geolocated";
import logo from "../../resources/logo.png";
import Axios from 'axios';
interface NimbleMapState{
    coords: {
        lat:number,
        lng:number
    }
}
class NimbleMap extends Component<{},NimbleMapState> {
    myRef:any = null;
    constructor(props:any,state:any){
        super(props);
        this.state = {coords: {lat:0,lng:0}};
        this.updateCurrentPosition = this.updateCurrentPosition.bind(this);
        this.MapComponent = this.MapComponent.bind(this);
        this.myRef = React.createRef();
    }

    generateNearbyTaxis = () =>
    {
        console.log("requesting drivers");
        const element = React.createElement(Marker,{icon: {url:logo,scaledSize:{width:65,height:45}},position:{lat:28.085988,lng:34.8292901}})
        this.myRef.current.children = element;
    }

    updateCurrentPosition(position:any){
        this.setState(()=>{
            return {coords: {lat:position.coords.latitude,lng:position.coords.longitude}}
        })
    }

    componentDidMount(){
        setInterval(() => navigator.geolocation.getCurrentPosition(this.updateCurrentPosition),5000);
    }



    MapComponent = (withScriptjs(withGoogleMap(props =>
        { return this.state.coords.lat!=0 ? <GoogleMap
            defaultOptions={{ zoomControl: false, mapTypeControl: false, scaleControl: false, 
                streetViewControl: false, rotateControl: false, fullscreenControl: false }}
            clickableIcons={false}
            defaultZoom={20}
            ref={this.myRef.current}
            center={{ lat: this.state.coords.lat, lng: this.state.coords.lng }}
            >
            <button className="requestATaxi">Taxi Quick!</button>
            {this.state.coords ? <Marker icon={{url:logo,scaledSize:{width:65,height:45}}} position={{
                lat:this.state.coords.lat,
                lng:this.state.coords.lng
            }}></Marker> : null}
        </GoogleMap> : null;}
    )));

    render() {
        return (
            <this.MapComponent googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC1HJ2Q6o6Gwgn0ZrLogP7YPSgT0bmeio8&language=he&region=IL'
                containerElement={<div style={{ height: "90vh", position: "relative" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                loadingElement={<div style={{ height: "100%" }} />}
            />
        )
    }
}

export default NimbleMap;
