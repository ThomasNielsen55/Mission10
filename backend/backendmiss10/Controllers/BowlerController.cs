using backendmiss10.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace backendmiss10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private readonly IBowlerRepository _bowlerRepository;

        public BowlerController(IBowlerRepository temp)
        {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<object> Get()
        {
            var BowlerData = (from bowler in _bowlerRepository.Bowlers
                              join team in _bowlerRepository.Teams
                              on bowler.TeamId equals team.TeamId
                              where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                              select new
                              {
                                  BowlerId = bowler.BowlerId,
                                  BowlerName = bowler.BowlerFirstName + " " + bowler.BowlerMiddleInit + " " + bowler.BowlerLastName,
                                  BowlerAddress = bowler.BowlerAddress,
                                  BowlerCity = bowler.BowlerCity,
                                  BowlerState = bowler.BowlerState,
                                  BowlerZip = bowler.BowlerZip,
                                  BowlerPhone = bowler.BowlerPhoneNumber,
                                  TeamName = team.TeamName
                              }).ToArray();

            return BowlerData;
        }
    }
}
