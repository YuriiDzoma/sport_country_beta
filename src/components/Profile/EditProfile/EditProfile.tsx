import styles from './EditProfile.module.scss'
import React, {useState} from "react";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {currentUser} from "store/selectors";
import {useFormik} from "formik";
import {getUserAvatar, setUserAvatar, setUserNewData} from "api/api";
import {useNavigate} from "react-router";
import {setUsersLoading, updateUserData} from "store/users-slice";
import {updateCurrentUser} from "store/profile-slice";

const EditProfile = () => {
    const user = useAppSelector(currentUser);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [avatar, setAvatar] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const initialFormValues = user ? {
        country: user.country,
        region: user.region,
        city: user.city,
        isFriend: user.isFriend,
        createdAt: user.createdAt,
        id: user.id,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        isTrainer: user.isTrainer,
    } : {
        country: '',
        region: '',
        city: '',
        isFriend: '',
        createdAt: '',
        id: '',
        displayName: '',
        photoURL: '',
        email: '',
        isTrainer: '',
    };

    const { values, handleChange, handleSubmit, setSubmitting, isSubmitting, dirty } = useFormik({
        initialValues: initialFormValues,

        onSubmit: (values) => {
            setTimeout(() => {
                dispatch(setUsersLoading(true))
                const userData = user ? {
                    country: country === '' ? user.country : country,
                    region: region === '' ? user.region : region,
                    city: values.city,
                    isFriend: values.isFriend,
                    createdAt: values.createdAt,
                    id: values.id,
                    displayName: values.displayName,
                    photoURL:  avatar === '' ? values.photoURL : avatar,
                    email: values.email,
                    isTrainer: values.isTrainer,
                } : null;
                if (user) {
                    setUserNewData(user.id, userData).then((response)=> {
                        dispatch(updateUserData(response));
                        dispatch(updateCurrentUser(response));
                    })
                    navigate(`/profile/${user.id}`)
                }
                dispatch(setUsersLoading(false))
                setSubmitting(false);
            }, 400);
        },
    });
    const loadPhoto = (e: any) => {
        const file = e.target.files[0];
        if (user) {
            setUserAvatar(user.id, file).then(() => getUserAvatar(user.id).then(response => {
                if (response) {
                    setAvatar(response);
                }
            }))

        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className={styles.editorWrapper}>
                <h3>Edit profile</h3>
                <div className={styles.edit}>
                    <label htmlFor={'photo'}>photo</label>
                    <input type={'file'} onChange={e => loadPhoto(e)}  className={styles.edit__photo} id={'photo'} name={'photo'}/>
                </div>
                <div className={styles.edit}>
                    <label htmlFor={'displayName'}>Name</label>
                    <input value={values.displayName} onChange={handleChange}
                           className={styles.edit__nameSurname} id={'displayName'} name={'displayName'}/>
                </div>
                <div className={styles.edit}>
                    <label htmlFor={'country'}>Country</label>
                    <CountryDropdown
                        name={'country'}
                        id={'country'}
                        classes={styles.edit__nameSurname}
                        value={country}
                        onChange={(val) => setCountry(val)}/>
                </div>
                <div className={styles.edit}>
                    <label htmlFor={'region'}>Region</label>
                    <RegionDropdown
                        name={'region'}
                        id={'region'}
                        classes={styles.edit__nameSurname}
                        country={country}
                        value={region}
                        onChange={(val) => setRegion(val)}/>
                </div>
                <div className={styles.edit}>
                    <label htmlFor={'city'}>City</label>
                    <input className={styles.edit__nameSurname} value={values.city}
                           onChange={handleChange} id={'city'} name={'city'}/>
                </div>
                <button className={styles.edit__button} type="submit" disabled={isSubmitting || !dirty}>
                    Save changes
                </button>
            </div>
        </form>
    )
}

export default EditProfile;