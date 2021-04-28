import React from 'react';
import s from './Description.module.css';
import DefaultUserImg from "../../common/DefaultUserImg/DefaultUserImg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {updateUserStatus} from "../../../redux/profileReducer";

const Description = (props) => {
    return (
        <div className={s.description}>

            <div className={s.avatar}>
                {props.profileInfo.photos.large ? <img src={props.profileInfo.photos.large}/> : <DefaultUserImg/>}
            </div>

            <div className={s.information}>
                <div className={s.name_status}>
                    <h2>{props.profileInfo.fullName}</h2>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>


                <div className={s.item}>{props.profileInfo.aboutMe}</div>

                <div className={s.item}>{props.profileInfo.lookingForAJob ?
                    <span>{props.profileInfo.lookingForAJobDescription}</span> : null}
                </div>

                <div className={s.item}>{props.profileInfo.contacts.facebook ?
                    <a href={props.profileInfo.contacts.facebook} target="_blank">facebook,{' '}</a> : null}

                    {props.profileInfo.contacts.vk ?
                        <a href={props.profileInfo.contacts.vk} target="_blank">vk,{' '}</a> : null}

                    {props.profileInfo.contacts.twitter ?
                        <a href={props.profileInfo.contacts.twitter} target="_blank">twitter,{' '}</a> : null}

                    {props.profileInfo.contacts.instagram ?
                        <a href={props.profileInfo.contacts.instagram} target="_blank">instagram,{' '}</a> : null}

                    {props.profileInfo.contacts.github ?
                        <a href={props.profileInfo.contacts.github} target="_blank">github</a> : null}
                </div>

            </div>

        </div>
    )
}

export default Description;