import React from "react";
import mediasUtil from '../utils/medias.util';
import "../style/song.page.css";

export default class SingerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            medias: {
                picture: '',
            }
        }
    }

    fetchMedias = async () => {
        console.log("ICI");
        if(this.props.singer) {
            const medias = await mediasUtil.getSingerMedias(this.props.singer.Name.value);
            this.setState(
                {
                    medias: { picture: medias.picture,}
                }
            );
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.singer !== prevProps.singer) this.fetchMedias();
    }

    render = () => {
        //const trackData = this.formatTrackData();
        if(!this.props.singer){
            return(<div></div>);
        }
        const singer = this.props.singer;
        //this.fetchMedias();

        if(!singer.Name) {
            singer.Name = {};
            singer.Name.value = "";
        }

        if(!singer.BirthName) {
            singer.BirthName = {};
            singer.BirthName.value = "";
        }

        if(!singer.BirthDate) {
            singer.BirthDate = {};
            singer.BirthDate.value = "";
        }

        if(!singer.Description) {
            singer.Description = {};
            singer.Description.value = "";
        }

        if(!singer.Quote) {
            singer.Quote = {};
            singer.Quote.value = "";
        }

        if(!singer.Gender) {
            singer.Gender = {};
            singer.Gender.value = "";
        }

        if(!singer.Homepages) {
            singer.Homepages = {};
            singer.Homepages.value = "";
        }


        return (
            <div className={"page"}>
                <div className="panel">
                    <div className="titlebar">
                        <h1>{singer.Name.value}</h1>
                        <h2>{singer.BirthName.value}</h2>
                    </div>
                    <div className="topbar">
                        <div>
                            <strong>Description</strong>
                            <p>{singer.Description.value}</p>
                        </div>
                        <img src={this.state.medias.picture} alt={""}/>
                    </div>
                    <div className="main-infos">
                        <div><strong>Albums : </strong> {singer.Albums.value}</div>
                    </div>
                    <div>
                        <strong>Gender : </strong>
                        {
                            singer.Gender.value
                        }
                    </div>
                    <br/>
                    <div>
                        <strong>Birth Name : </strong>
                        {
                            singer.BirthName.value
                        }
                    </div>
                    <br/>
                    <div>
                        <strong>Birth Date : </strong>
                        {
                            singer.BirthDate.value
                        }
                    </div>
                    <br/>
                    <div>
                        <strong>Birth Places : </strong>
                        {
                            singer.BirthPlaces.value
                        }
                    </div>
                    <br/>
                    <div>
                        <strong>Start Year : </strong>
                        {
                            singer.StartYearString.value
                        }
                    </div>
                    <br/>
                    <div>
                        <strong>Quote : </strong>
                        {
                            singer.Quote.value
                        }
                    </div>
                    <br/>
                    <div>
                        <strong>Homepages : </strong>
                        {
                            singer.Homepages.value
                        }
                    </div>
                </div>
            </div>
        );
    };
}