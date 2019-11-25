﻿using System.Collections.Generic;
using Business_layer.DTO;
using Business_layer.Interfaces;
using Data_layer.Filter.ProductenFilters;
using Microsoft.AspNetCore.Mvc;

namespace dotNETAcademyServer.Controllers
{
    [Route("api/traject")]
    [ApiController]
    public class TrajectController : ControllerBase
    {
        private readonly ITrajectFacade _facade;
        private List<string> trajectTypes;

        public TrajectController(ITrajectFacade facade)
        {
            this._facade = facade;
            this.trajectTypes = new List<string>() {
                "Aanbevolen", "Full Stack", "Visual Studio", "Angular"
            };
        }

        [Route("types")]
        [HttpGet]
        public List<string> GetTrajectTypes()
        {
            return this.trajectTypes;
        }

        [HttpGet]
        public List<TrajectDTO> GetTrajecten([FromQuery]TrajectFilter filter)
        {
            return _facade.GetTrajecten(filter);
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<TrajectDTO> GetTraject(int id)
        {
            var traject = _facade.GetTraject(id);
            if (traject == null)
                return NotFound($"Traject met id:{id} bestaat niet.");
            return traject;
        }

        [HttpPost]
        public ActionResult<TrajectDTO> AddTraject([FromBody] TrajectCreateUpdateDTO traject)
        {
            var createdTraject = _facade.AddTraject(traject);
            if (createdTraject == null)
                return Conflict("Traject met die titel bestaat al.");
            return Created($"api/traject/{createdTraject.ID}", createdTraject);
        }

        [Route("{id}")]
        [HttpDelete]
        public ActionResult<TrajectDTO> DeleteTraject(int id)
        {
            var deletedTraject = _facade.DeleteTraject(id);
            if (deletedTraject == null)
                return NotFound($"Traject met id:{id} bestaat niet.");
            return NoContent();
        }

        [HttpPut("{id}")]
        public ActionResult<TrajectDTO> UpdateTraject([FromBody]TrajectCreateUpdateDTO traject, int id)
        {
            var updatedTraject = _facade.UpdateTraject(traject, id);
            if (updatedTraject == null)
                return Conflict($"Traject met id:{id} bestaat niet.");
            return Ok(updatedTraject);
        }
    }
}
