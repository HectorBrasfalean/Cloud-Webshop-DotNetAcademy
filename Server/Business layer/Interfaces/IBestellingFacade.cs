﻿using Business_layer.DTO;
using System.Collections.Generic;

namespace Business_layer.Interfaces
{
    public interface IBestellingFacade
    {
        List<BestellingDTO> GetBestellingenByCustomerId(string custId);
        BestellingDTO GetBestellingById(int bestellingId);
        BestellingDTO AddBestellingToCustomer(string custId);
    }
}
