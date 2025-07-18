
import { db } from "@/firebase/admin";


export async function getInterviewByUserId(userId:string): Promise<Interview[] | null> {
    const interview = await db.collection('interview').where('userId', '==', userId).orderBy('createdAt', 'desc').get();

    return interview.docs.map((doc) =>({
        id : doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getLatestInterviews(params:GetLatestInterviewsParams): Promise<Interview[] | null> {

    const {userId , limit = 20} = params;
    const interview = await db.collection('interview').orderBy('createdAt', 'desc').where('finalized', '==', true).where('userId','!=', userId).limit(limit).get();

    return interview.docs.map((doc) =>({
        id : doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getInterviewById(id:string): Promise<Interview | null> {
    const interview = await db.collection('interview').doc(id).get();

    return interview.data() as Interview | null;
}
