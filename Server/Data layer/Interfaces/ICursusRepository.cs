﻿using Data_layer.Filter;
using Data_layer.Filter.ProductenFilters;
using Data_layer.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data_layer.Interfaces
{
    public interface ICursusRepository
    {
        List<Cursus> GetCursussen(CursusFilter filter);
        Cursus GetCursusByTitel(string titel);
        Cursus GetCursusById(int id);
        void SaveChanges();
        Cursus AddCursus(Cursus cursus);
        Cursus DeleteCursus(int id);
        Cursus UpdateCursus(Cursus cursus);
    }
}
