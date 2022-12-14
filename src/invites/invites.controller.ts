import { Body, Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { InvitDto } from './dto/invites.dto';
import { InvitesService } from './invites.service';


@Controller('invites')
export class InvitesController {
    constructor(private readonly invitesService: InvitesService){}    

    //invit a friend
    @Post('/invit')
    public async inviter(@Body() invitDto: InvitDto) {
        Logger.log("Request : /invites/inviter" + invitDto);
        return await this.invitesService.inviter(invitDto);

    }

    //accept an invitation
    @Put('/accept')
    public async accepter(@Body() invitDto: InvitDto) {
        Logger.log("Request : /invites/accepter" + invitDto);
        return await this.invitesService.accepter(invitDto);

    }   
   
    //get all invitations for an user
    @Get('/:username/invited')
    public async getAllInvitedTo(@Param () param) {
        Logger.log("Request : /invites/" + param.username);
        return await this.invitesService.getAllInvitedTo(param.username);



    }

    //get all invitations for an user
    @Get('/:username/accepted')
    public async getAllAccepted(@Param () param) {
        Logger.log("Request : /invites/" + param.username + "/accepted");
        return await this.invitesService.getAllAccepted(param.username);
    }


     /*
    //refuse an invitation
    @Put('/refused')
    public async refuser(@Body() invitDto: InvitDto) {
        Logger.log("Request : /invites/refuser" + invitDto);
        return await this.invitesService.refused(invitDto);

    }*/

    
}


