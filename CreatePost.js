//import React, { useState } from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';

    function CreatePost() {
        // creating hooks
        const title = useFormInput('');
        const subTitle = useFormInput('');
        const content = useFormInput('');

        function handleSubmit(e) {
        e.preventDefault();

        console.log('title', title);
        console.log('subTitle', subTitle);
        console.log('content', content);
        firestore.collection('posts').add({
            title: title.value,
            content: content.value,
            subTitle: subTitle.value, 
            createdAt: new Date()
        })
                                }

    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-field" >
                    <label>
                        Title
                    </label>
                    {/* passing objects  in {...objectName} */}
                    <input {...title} />
                </div>

                <div className="form-field" >
                    <label>
                        Sub Title
                    </label>
                    {/* passing objects in {...objectName} */}
                    <input {...subTitle} />
                </div>

                <div className="form-field" >
                    <label>
                    Content
                    </label>
                    {/* passing objects in {...objectName} */}
                    <textarea {...content} >

                    </textarea>
                </div>

                <button className="create-post-btn" >Create Post</button>

            </form>
        </div>
    );
    }
export default CreatePost;