
const API = {
    postSightingReport: async (reportData) => {
        console.log(reportData)
        let url ="http://localhost:3001/api/sightingReport"
    
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
          });
          return response.json();
    }
}

export default API;

