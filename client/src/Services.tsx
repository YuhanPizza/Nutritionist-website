
function Services() {
  return (
    <div className="container my-5">
      
      {/* Overview */}
      <h1 className="text-center mb-5">Our Services</h1>

      {/* Offerings */}
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Offline Meal Plan Service - $120</h5>
              <p className="card-text flex-fill">2 weeks personalized meal plan. Ideal for clients on specific diets looking for recipes recommendations or daily value intake information.</p>
              <button style={{alignSelf: 'center'}} className="btn btn-primary mt-auto" onClick={() => { /* Your booking code here */ }}>Book</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Online Single Session - $150</h5>
              <p className="card-text flex-fill">1hr session without meal planning. Assessment of diet history, nutrition recommendation and education and any applicable resources for success. Best for those who require minor adjustments to their eating habits, no personalized meal plan.</p>
              <button style={{alignSelf: 'center'}} className="btn btn-primary mt-auto" onClick={() => { /* Your booking code here */ }}>Book</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Online Double Session - $250</h5>
              <p className="card-text flex-fill">1hr session + 30-minute meal planning session + personalized meal plan. 30 mins follow-up session.</p>
              <button style={{alignSelf: 'center'}} className="btn btn-primary mt-auto" onClick={() => { /* Your booking code here */ }}>Book</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;