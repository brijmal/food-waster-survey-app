export interface SurveyResponse {
    // User Information
    userName: string;
    mobileNumber: string;
    address: string;
    
    // Survey Data
    date: Date;
    householdSize: number;
    mealsCooked: number;
    foodWasteAmount: number;
    mainWasteReason: string;
    willingToReduce: boolean;
}

export class SurveyStore {
    private static responses: SurveyResponse[] = [];

    static addResponse(response: SurveyResponse) {
        this.responses.push(response);
        console.log('Survey response saved:', response);
    }

    static getResponses(): SurveyResponse[] {
        return this.responses;
    }
}