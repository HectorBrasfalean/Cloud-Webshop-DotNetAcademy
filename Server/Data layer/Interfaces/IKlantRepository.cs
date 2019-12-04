﻿using Data_layer.Model;

namespace Data_layer.Interfaces
{
    public interface IKlantRepository
    {
        Klant GetKlantByID(string klantId);
        Klant CreateKlant(Klant klant);
        void SaveChanges();
    }
}