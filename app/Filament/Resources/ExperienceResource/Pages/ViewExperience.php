<?php

namespace App\Filament\Resources\ExperienceResource\Pages;

use App\Filament\Resources\ExperienceResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewExperience extends ViewRecord
{
    protected static string $resource = ExperienceResource::class;

    protected function getActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
